import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddChat from './AddChat.js';
import ChatList from './ChatList.js';
import { chatsRef, roomsRef } from '../services/firebase.js';
import QUERY from '../utils/QUERY.js';

// import QUERY from '../utils/QUERY.js';

class ChatApp extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const searchParams = QUERY.parse(window.location.search);
        const roomsMessagesRef = chatsRef.child(searchParams.key);


        const chatList = new ChatList({ chats: [] });
        const chatListDOM = chatList.render();
        main.appendChild(chatListDOM);

        const addChat = new AddChat();
        const addChatDOM = addChat.render();
        main.appendChild(addChatDOM);

        chatsRef.on('value', snapshot => {
            const value = snapshot.val();
            const chats = value ? Object.values(value) : [];
            chatList.update({ chats });
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div class="app">
                <main>
                </main>
            </div>
        `;
    }
}

export default ChatApp; 