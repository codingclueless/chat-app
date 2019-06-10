import Component from '../Component.js';
import { auth, chatsRef } from '../services/firebase.js';

class ChatItem extends Component {

    render(){
        const dom = this.renderDOM();
        // const chat = this.props.chat;


        return dom;
    }


    renderTemplate() {
        const chat = this.props.chat;
        const avatar = chat.photoURL || 'assets/user-default-image.png';
        const date = chat.date.split('T')[0];
        // const message = this.props.message;
        // const momentDate = moment(message.date);

        return /*html*/`
            <li class="single-chat">
                <div>
                    <img src="${avatar}">
                    <p>${chat.uid}</p>
                </div>
                <p>${chat.message}</p>
                <p>${date}</p>
            </li>
    `;
    }
}

export default ChatItem;