import 'package:flutter/material.dart';
import 'package:mealloop_mobile/features/chatroom/widgets/chatroom_list.dart';

class ChatroomScreen extends StatefulWidget {
  const ChatroomScreen({super.key});

  @override
  State<ChatroomScreen> createState() => _ChatroomScreenState();
}

class _ChatroomScreenState extends State<ChatroomScreen>
    with TickerProviderStateMixin {
  final PageController _pageController = PageController();
  int _selectedTabIndex = 0;

  void _onTabTapped(int index) {
    setState(() => _selectedTabIndex = index);
    _pageController.animateToPage(
      index,
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeInOut,
    );
  }

  final List<String> tabTitles = ['Người quen', 'Cửa hàng', 'Người lạ'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Trò chuyện',
          style: TextStyle(fontWeight: FontWeight.w900),
        ),
        centerTitle: false,
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.edit_square),
            onPressed: () {
              // Xử lý khi nhấn gọi
            },
          ),
          IconButton(
            icon: const Icon(Icons.more_vert),
            onPressed: () {
              // Xử lý khi nhấn info
            },
          ),
        ],
      ),
      body: Column(
        children: [
          SizedBox(
            height: 40,
            child: TextField(
              cursorColor: Colors.black,
              decoration: InputDecoration(
                hintText: 'Tìm kiếm',
                contentPadding: EdgeInsets.symmetric(
                  vertical: 0,
                  horizontal: 15,
                ),
                hintStyle: TextStyle(color: Color(0xFF929292)),
                filled: true,
                fillColor: Color(0xFFf2f3f5),
                floatingLabelBehavior: FloatingLabelBehavior.never,
                suffixIcon: Icon(Icons.search, color: Colors.blue),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: BorderSide.none, // nếu muốn không viền
                ),
              ),
            ),
          ),

          // Tabs: -----------------------------------------------------------------------------
          Container(
            height: 48,
            padding: const EdgeInsets.symmetric(horizontal: 12),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: List.generate(tabTitles.length, (index) {
                final bool isSelected = index == _selectedTabIndex;
                return GestureDetector(
                  onTap: () => _onTabTapped(index),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 200),
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    decoration: BoxDecoration(
                      color: isSelected ? Colors.blue : Colors.transparent,
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Text(
                      tabTitles[index],
                      style: TextStyle(
                        color: isSelected ? Colors.white : Colors.black,
                        fontWeight: isSelected ? FontWeight.w700 : FontWeight.normal,
                      ),
                    ),
                  ),
                );
              }),
            ),
          ),

          const SizedBox(height: 10),

          // Content: --------------------------------------------------------------------------
          Expanded(
            child: PageView(
              controller: _pageController,
              physics: const NeverScrollableScrollPhysics(), // Không cho vuốt ngang
              children: const [
                ChatroomList(),
                ChatroomList(),
                ChatroomList(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}