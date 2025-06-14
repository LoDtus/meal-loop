import 'package:flutter/material.dart';
import 'package:mealloop_mobile/features/chatroom/screens/chatroom_screen.dart';
import 'package:mealloop_mobile/features/common/widgets/navigation_bar.dart';
import 'package:mealloop_mobile/features/post/screens/post_screen.dart';
import 'package:mealloop_mobile/features/profile/screens/profile_screen.dart';
import 'package:mealloop_mobile/features/shop/screens/shop_screen.dart';
import 'package:mealloop_mobile/features/search/screens/search_screen.dart';

// post → shop → camera → chat → profile
class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  int _selectedIndex = 0;

  // Các tab giữ trạng thái, không refresh khi chuyển sang tab khác
  final List<int> _persistentTabs = [0, 1, 2];

  final List<Widget> _screens = [
    PostScreen(),
    SearchScreen(),
    ShopScreen(),
    ChatroomScreen(),
    ProfileScreen(),
  ];

  void _onTabChanged(int index) {
    setState(() => _selectedIndex = index);
  }

  @override
  Widget build(BuildContext context) {
    Widget body;

    // Với các tab không lưu trạng thái, reset về 0 để body về tab Post
    if (_persistentTabs.contains(_selectedIndex)) {
      body = IndexedStack(
        index: _selectedIndex,
        children: _screens,
      );
    } else {
      // Với các tab không persistent, render trực tiếp (không giữ trạng thái)
      body = _screens[_selectedIndex];
    }

    return Scaffold(
      body: body,
      bottomNavigationBar: CustomNavigationBar(
        selectedIndex: _selectedIndex,
        onTabSelected: _onTabChanged,
      ),
    );
  }
}