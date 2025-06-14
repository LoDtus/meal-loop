/// Kiểm tra trạng thái ban đầu của ứng dụng, bao gồm:
/// Người dùng mới (tất nhiên là chưa đăng nhập)
/// Người dùng đã đăng nhập
/// Người dùng chưa đăng nhập (không còn mới nữa, bị sign out trong trường hợp nào đó - chủ động, bị động)
library;

import 'package:shared_preferences/shared_preferences.dart';

class AppInitializer {
  static Future<String> getInitialRoute() async {
    final prefs = await SharedPreferences.getInstance();
    // final isNewMember = prefs.getBool('first_time') ?? true;
    // final isLoggedIn = prefs.getBool('logged_in') ?? false;
    final isNewMember = false;
    final isLoggedIn = true;

    return '/main';
    // if (isNewMember) return '/introduction';
    // if (isLoggedIn) return '/post';
    // return '/auth';
  }
}
