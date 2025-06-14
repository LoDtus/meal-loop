import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Hồ sơ',
          style: TextStyle(fontWeight: FontWeight.w900),
        ),
        centerTitle: false,
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.info_outline),
            onPressed: () {
              // Xử lý khi nhấn info
            },
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Hành động khi bấm
        },
        backgroundColor: Colors.blue, 
        child: Icon(Icons.add),
      ),
      body: Column(
        children: [
          Row(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(40), // bo tròn radius 40, muốn tròn hết thì = width /2
                child: Image.network(
                  'https://i.pravatar.cc/80', // link ảnh mẫu
                  width: 120,
                  height: 120,
                  fit: BoxFit.cover,
                ),
              ),
              Column(
                children: [
                  Text('Nguyễn Trung Long'),
                  Text('nguyentrunglong.work'),
                  Row(
                    children: [
                      Column( // Người theo dõi (mình)
                        children: [
                          Text('124'),
                          Text('Follower'),
                        ],
                      ),
                      Column( // Người (mà mình) đang theo dõi
                        children: [
                          Text('3025'),
                          Text('Following'),
                        ],
                      ),
                    ],
                  )
                ],
              ),
            ],
          ),
          const SizedBox(width: 16),
          Column(
            children: [

            ],
          ),
        ],
      ),
    );
  }
}
