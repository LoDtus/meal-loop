import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

let stompClient = null;
let unsentMessages = [];

export const connectWebSocket = () => {
    // stompClient = new Client({
    //     webSocketFactory: () => new SockJS(`${BASE_URL}/ws`),
    //     reconnectDelay: 10000,
    //     onConnect: async() => {
    //         console.log('Connected to WebSocket server');

    //         unsentMessages.forEach(({destination, message}) => {
    //             stompClient.publish({
    //                 destination,
    //                 body: JSON.stringify(message),
    //             });
    //         });
    //         unsentMessages = [];

    //         GLOBAL_TOPICS.forEach(topic => {
    //             subscribe(topic, dispatch);
    //         });

    //         if (profile) {
    //             subscribe(`/topic/chatroom/chatroom-02HZXXJ8XH2Y8Z6Q5YF6S0RW82`, dispatch);

    //             const joinedChatRoom = await getJoinedChatrooms(profile?.id);
    //             joinedChatRoom?.rooms?.forEach((chatRoom) => {
    //                 const chatroomEndpoint = `/topic/chatroom/${chatRoom?.id}`;
    //                 const messageEndpoint = `/topic/message/${chatRoom?.id}`;
    //                 subscribe(chatroomEndpoint, dispatch);
    //                 subscribe(messageEndpoint, dispatch);
    //             });

    //             SINGLE_TOPICS.forEach(topic => {
    //                 const endpoint = `/user/${profile.id}${topic}`;
    //                 subscribe(endpoint, dispatch);
    //             });
    //         }
    //     },
    //     onStompError: (error) => {
    //         console.error('STOMP error:', error);
    //     },
    //     onDisconnect: () => {
    //         console.warn('Disconnected from WebSocket server!');
    //     },
    // });
    // stompClient.activate();
};

export const disconnectWebSocket = () => {
    if (stompClient.connected) {
        stompClient.deactivate();
        console.log('Disconnected from WebSocket server!');
    }
};

export const subscribe = (topic, dispatch) => {
    if (stompClient.connected) {
        stompClient.subscribe(topic, (message) => {
            const parsedMessage = JSON.parse(message.body);
            // console.log("📨 Received:", topic, parsedMessage);

            if (topic.includes("/notification")) {
                
            } else if (topic.includes("/chatroom")) {

            } else if (topic.includes("/message")) {
                // dispatch(pushMessageToChatRoom(parsedMessage));
            } else if (topic.includes("/incident")) {

            } else if (topic.includes("/threads")) {

            } else if (topic.includes("/map")) {

            } else {
                console.log('Other topic:', parsedMessage);
            }
        });
        console.log(`Successfully subscribed to topic: ${topic}`);
    } else {
        console.warn('WebSocket is not connected!');
    }
};