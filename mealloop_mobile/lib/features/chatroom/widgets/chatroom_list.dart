import 'package:flutter/material.dart';

class ChatroomList extends StatelessWidget {
  const ChatroomList({super.key});

  @override
  Widget build(BuildContext context) {
    final chatrooms = List.generate(
      30,
      (index) => {
        'name': 'Người dùng $index',
        'message': 'Tin nhắn gần đây $index',
      },
    );

    return ListView.builder(
      itemCount: chatrooms.length,
      itemBuilder: (context, index) {
        final room = chatrooms[index];
        return ListTile(
          leading: CircleAvatar(
            child: Text(room['name']![0]),
          ),
          title: Text(room['name']!),
          subtitle: Text(room['message']!),
          onTap: () {
            // TODO: Điều hướng đến chi tiết phòng chat
          },
        );
      },
    );
  }
}