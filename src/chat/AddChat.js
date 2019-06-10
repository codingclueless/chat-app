import Component from '../Component.js';
import { auth } from '../services/firebase.js';
import { chatsRef, roomsRef } from '../services/firebase.js';

class AddChat extends Component {

    render(){
        const form = this.renderDOM();
        const chatRef = chatsRef.child(roomsRef.key);
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();

            const chat = chatRef.push();
            // .child(chatRef.key)

            chat.set = {
                key: chatRef.key,
                message: input.value,
                uid: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL,
                date: new Date().toISOString()
            };

            // form.reset();
            // TODO:possible
            // input.focus();
            // form.blur();
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <input name="message" required>
                <button>Add chat</button>
            </form>
        `;
    }
}

export default AddChat;