import 'package:flutter/material.dart';

class PostItem extends StatelessWidget {
  final int index;

  const PostItem({super.key, required this.index});

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Container(
          color: Colors.orangeAccent,
          alignment: Alignment.center,
          child: Text(
            'Post $index',
            style: const TextStyle(
              color: Colors.white,
              fontSize: 36,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),

        // Cột nút chức năng bên phải
        Positioned(
          right: 16,
          bottom: 80,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              _buildIconButton(Icons.favorite, '1.2K', context),
              const SizedBox(height: 20),
              _buildIconButton(Icons.comment, '321', context),
              const SizedBox(height: 20),
              _buildIconButton(Icons.bookmark_border, '321', context),
              const SizedBox(height: 20),
              _buildIconButton(Icons.share, 'Share', context),
              const SizedBox(height: 20),
              _buildIconButton(Icons.more_vert, '', context),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildIconButton(IconData icon, String label, BuildContext context) {
    return Column(
      children: [
        IconButton(
          icon: Icon(icon, color: Colors.white),
          onPressed: () {
            _openCommentBottomSheet(context);
          },
        ),
        Text(
          label,
          style: const TextStyle(color: Colors.white, fontSize: 12),
        ),
      ],
    );
  }
}

void _openCommentBottomSheet(BuildContext context) {
  showModalBottomSheet(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent, // để có bo góc đẹp
    builder: (context) {
      return FractionallySizedBox(
        heightFactor: 2 / 3, // chiếm 2/3 màn hình
        child: Container(
          decoration: const BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
          ),
          child: Column(
            children: [
              const SizedBox(height: 10),
              Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(
                  color: Colors.grey[400],
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
              const SizedBox(height: 16),
              const Text(
                'Bình luận',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              const Divider(),

              // Nội dung ví dụ (có thể thay bằng ListView hoặc widget thực tế)
              Expanded(
                child: ListView.builder(
                  itemCount: 20,
                  itemBuilder: (_, index) => ListTile(
                    leading: const CircleAvatar(child: Icon(Icons.person)),
                    title: Text('Người dùng $index'),
                    subtitle: const Text('Nội dung bình luận...'),
                  ),
                ),
              ),

              // Input gửi bình luận
              const Padding(
                padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                child: TextField(
                  decoration: InputDecoration(
                    hintText: 'Viết bình luận...',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.all(Radius.circular(12)),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      );
    },
  );
}