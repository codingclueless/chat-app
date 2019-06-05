import Component from '../Component.js';
import RoomItem from './RoomItem.js';

class RoomList extends Component {

    render() {
        const dom = this.renderDOM();
        const rooms = this.props.rooms;

        rooms.forEach(room => {
            const roomItem = new RoomItem({ room });
            dom.appendChild(roomItem.render());
        });

        return dom;
    }

    renderTemplate(){
        return /*html*/`
            <ul>
            </ul>
        `;
    }
}

export default RoomList;