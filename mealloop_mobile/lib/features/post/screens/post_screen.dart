import 'package:flutter/material.dart';
import 'package:mealloop_mobile/features/post/widgets/post_item.dart';

class PostScreen extends StatelessWidget {
  const PostScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        elevation: 0,
        centerTitle: true,
        title: const Text(
          'Tiêu đề',
          style: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
          ),
        ),
        leading: IconButton(
          icon: const Icon(Icons.notifications_on, color: Colors.white),
          onPressed: () {
            // TODO: handle left icon press
          },
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.pending_outlined, color: Colors.white),
            onPressed: () {
              // TODO: handle right icon press
            },
          ),
        ],
      ),
      body: Stack(
        children: [
          // Content Area: -------------------------------------------------------------------------
          GestureDetector(
            onHorizontalDragUpdate: (_) {}, // Chặn vuốt trái/phải
            onHorizontalDragStart: (_) {},
            onHorizontalDragEnd: (_) {},
            child: PageView.builder(
              scrollDirection: Axis.vertical,
              itemCount: 10,
              itemBuilder: (context, index) => PostItem(index: index),
            ),
          ),
        ]
      ),
    );
  }
}

/// Custom ScrollPhysics để thao tác vuốt "nặng" hơn
class CustomScrollPhysics extends ClampingScrollPhysics {
  const CustomScrollPhysics({super.parent});

  @override
  CustomScrollPhysics applyTo(ScrollPhysics? ancestor) {
    return CustomScrollPhysics(parent: buildParent(ancestor));
  }

  @override
  double get dragStartDistanceMotionThreshold => 30.0; // Mặc định là 3.5

  @override
  double applyPhysicsToUserOffset(ScrollMetrics position, double offset) {
    // Giảm độ nhạy vuốt: càng gần 0 thì càng nặng
    return offset * 0.3;
  }
}