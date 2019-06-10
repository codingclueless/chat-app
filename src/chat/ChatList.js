import Component from '../Component.js';
import ChatItem from './ChatItem.js';

class ChatList extends Component {
    render() {
        const dom = this.renderDOM();
        const chats = this.props.chats;

        // const chatItem = new ChatItem();
        // dom.appendChild(chatItem.render());

        chats.forEach(chat => {
            const chatItem = new ChatItem({ chat });
            dom.appendChild(chatItem.render());
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul>
                
            </ul>
        `;
    }

}

export default ChatList;