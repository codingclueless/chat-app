import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddRoom from './AddRoom.js';
import RoomList from '../shared/RoomList.js';
import { roomsRef } from '../services/firebase.js';

class App extends Component {

    render(){
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.prepend(headerDOM);


        const addRoom = new AddRoom();
        const addRoomDOM = addRoom.render();
        main.appendChild(addRoomDOM);

        const roomList = new RoomList({ rooms: [] });
        const roomlistDOM = roomList.render();
        main.appendChild(roomlistDOM);


        roomsRef.on('value', snapshot => {
            const value = snapshot.val();
            const rooms = value ? Object.values(value) : [];
            roomList.update({ rooms });
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;