
import { storageService } from '../async-storage.service'
import { makeId ,makeLorem} from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'note'
createNotes()
export const noteService = {
    query,
    getById,
    save,
    remove,
    addCarMsg
}
window.cs = noteService

async function query(filterBy = { txt: '', price: 0 }) {
    var notes = await storageService.query(STORAGE_KEY)
    // const { txt, minSpeed, maxPrice, sortField, sortDir } = filterBy

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

async function save(car) {
    var savedCar
    if (car._id) {
        const carToSave = {
            _id: car._id,
            price: car.price,
            speed: car.speed,
        }
        savedCar = await storageService.put(STORAGE_KEY, carToSave)
    } else {
        const carToSave = {
            vendor: car.vendor,
            price: car.price,
            speed: car.speed,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedCar = await storageService.post(STORAGE_KEY, carToSave)
    }
    return savedCar
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


function createNotes() {
    var notes = storageService.getFromLocal(STORAGE_KEY)
    if (!notes) {
        notes = [
            { id: 'n101', createdAt: 1112222, type: 'NoteTxt', isPinned: false, style: { backgroundColor: '#00d' }, info: { txt: makeLorem(50) } },
            { id: 'n102', createdAt: 1112222, type: 'NoteTxt', isPinned: true, style: { backgroundColor: '#00d' }, info: { txt: makeLorem(20) } },
            { id: 'n103', createdAt: 1112222, type: 'NoteTxt', isPinned: true, style: { backgroundColor: '#00d' }, info: { txt: makeLorem(5) } },
            { id: 'n104', createdAt: 1112222, type: 'NoteTxt', isPinned: false, style: { backgroundColor: '#00d' }, info: { txt: makeLorem(75) } },
            { id: 'n104', createdAt: 1112222, type: 'NoteTxt', isPinned: true, style: { backgroundColor: '#00d' }, info: { txt: makeLorem(40) } },
            { id: 'n104', createdAt: 1112222, type: 'NoteTxt', isPinned: false, style: { backgroundColor: '#00d' }, info: { txt: makeLorem(10)} },
            { id: 'n104', createdAt: 1112222, type: 'NoteTxt', isPinned: true, style: { backgroundColor: '#00d' }, info: { txt: makeLorem(69)} },
            // { id: 'n102', createdAt: 1112223, type: 'NoteImg', isPinned: false, info: { url: 'http://some-img/me', title: 'Bobi and Me' }, style: { backgroundColor: '#00d' } },
            // { id: 'n103', createdAt: 1112224, type: 'NoteTodos', isPinned: false, info: { title: 'Get my stuff together', todos: [{ txt: 'Driving license', doneAt: null }, { txt: 'Coding power', doneAt: 187111111 }] } }]
    ]}
    storageService.save(STORAGE_KEY,notes)
}
