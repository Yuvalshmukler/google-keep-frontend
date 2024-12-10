
import { storageService } from '../async-storage.service'
import { makeId, makeLorem } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'note'
createNotes()
export const noteService = {
    query,
    getById,
    save,
    remove,
    addCarMsg,
    getDefaultFilter,
    getDefaultNote
}
window.cs = noteService

async function query(filterBy = getDefaultFilter()) {
    var notes = await storageService.query(STORAGE_KEY)
    console.log(notes);
    console.log(filterBy);

    // const { createdAt, type, isArchive, isPinned, sortField, sortDir } = filterBy

    notes = notes.filter(note => note.isArchive === filterBy.isArchive)
    notes = notes.filter(note => note.isBin === filterBy.isBin)
    // if (txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     cars = cars.filter(car => regex.test(car.vendor) || regex.test(car.description))
    // }
    // if (minSpeed) {
    //     cars = cars.filter(car => car.speed >= minSpeed)
    // }
    // if(sortField === 'vendor' || sortField === 'owner'){
    //     cars.sort((car1, car2) => 
    //         car1[sortField].localeCompare(car2[sortField]) * +sortDir)
    // }
    // if(sortField === 'price' || sortField === 'speed'){
    //     cars.sort((car1, car2) => 
    //         (car1[sortField] - car2[sortField]) * +sortDir)
    // }

    // cars = cars.map(({ _id, vendor, price, speed, owner }) => ({ _id, vendor, price, speed, owner }))
    console.log(notes);

    return notes
}

function getById(carId) {
    return storageService.get(STORAGE_KEY, carId)
}

async function remove(carId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, carId)
}

async function save(note) {
    var savedNote = note
    // if (car._id) {
    //     const carToSave = {
    //         _id: car._id,
    //         price: car.price,
    //         speed: car.speed,
    //     }
    if (note._id) savedNote = await storageService.put(STORAGE_KEY, savedNote)
    else {
        savedNote = await storageService.post(STORAGE_KEY, savedNote)
    }
    return savedNote
}

async function addCarMsg(carId, txt) {
    // Later, this is all done by the backend
    const car = await getById(carId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    car.msgs.push(msg)
    await storageService.put(STORAGE_KEY, car)

    return msg
}

function getDefaultFilter() {
    return {
        createdAt: '',
        type: '',
        isArchive: false,
        isBin: false,
        isPinned: false,
        sortField: '',
        sortDir: '',
    }
}
function getDefaultNote() {
    return {
        createdAt: '',
        type: 'NoteTxt',
        isArchive: false,
        isBin: false,
        isPinned: false,
        style:{backgroundColor:'white'},
        info: {title:'',txt:''},
        labels:[]
    }
}
function createNotes() {
    var notes = storageService.getFromLocal(STORAGE_KEY)
    if (!notes) {
        notes = [
            { _id: 'n101', createdAt: 1112222, type: 'NoteTxt', isArchive: false, isBin: false, isPinned: false, style: { backgroundColor: 'pink' }, info: { title: "This it title", txt: makeLorem(50) }, labels: [] },
            { _id: 'n102', createdAt: 1112222, type: 'NoteTxt', isArchive: false, isBin: false, isPinned: true, style: { backgroundColor: 'pink' }, info: { title: "This it title", txt: makeLorem(20) }, labels: [] },
            { _id: 'n103', createdAt: 1112222, type: 'NoteTxt', isArchive: false, isBin: false, isPinned: true, style: { backgroundColor: 'pink' }, info: { title: "This it title", txt: makeLorem(5) }, labels: [] },
            { _id: 'n104', createdAt: 1112222, type: 'NoteTxt', isArchive: false, isBin: false, isPinned: false, style: { backgroundColor: 'pink' }, info: { title: "This it title", txt: makeLorem(35) }, labels: [] },
            { _id: 'n105', createdAt: 1112222, type: 'NoteTxt', isArchive: false, isBin: false, isPinned: true, style: { backgroundColor: 'pink' }, info: { title: "This it title", txt: makeLorem(40) }, labels: [] },
            { _id: 'n106', createdAt: 1112222, type: 'NoteTxt', isArchive: false, isBin: false, isPinned: false, style: { backgroundColor: '#00d' }, info: { title: "This it title", txt: makeLorem(10) }, labels: [] },
            { _id: 'n107', createdAt: 1112222, type: 'NoteTxt', isArchive: false, isBin: false, isPinned: true, style: { backgroundColor: '#00d' }, info: { title: "This it title", txt: makeLorem(69) }, labels: [] },
            { _id: 'n10', createdAt: 1112222, type: 'NoteTxt', isArchive: false, isBin: false, isPinned: true, style: { backgroundColor: '#00d' }, info: { title: "This it title", txt: makeLorem(24) }, labels: [] },
            { _id: 'n108', createdAt: 1112222, type: 'NoteTxt', isArchive: false, isBin: false, isPinned: true, style: { backgroundColor: '#00d' }, info: { title: "This it title", txt: makeLorem(3) }, labels: [] },
            { _id: 'n10100', createdAt: 1112222, type: 'NoteTxt', isArchive: false, isBin: false, isPinned: true, style: { backgroundColor: '#00d' }, info: { title: "This it title", txt: makeLorem(59) }, labels: [] },
            // { id: 'n102', createdAt: 1112223, type: 'NoteImg', isPinned: false, info: { url: 'http://some-img/me', title: 'Bobi and Me' }, style: { backgroundColor: '#00d' } },
            // { id: 'n103', createdAt: 1112224, type: 'NoteTodos', isPinned: false, info: { title: 'Get my stuff together', todos: [{ txt: 'Driving license', doneAt: null }, { txt: 'Coding power', doneAt: 187111111 }] } }]
        ]
    }
    storageService.save(STORAGE_KEY, notes)
}
