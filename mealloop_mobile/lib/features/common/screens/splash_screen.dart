import 'package:flutter/material.dart';
import 'dart:async';
import 'package:mealloop_mobile/app_initializer.dart';
import 'package:mealloop_mobile/features/common/wrappers/fade_wrapper.dart' show FadeWrapper;

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    _init();
  }

  Future<void> _init() async {
    final route = await AppInitializer.getInitialRoute();
    await Future.delayed(const Duration(seconds: 2)); // giữ splash lâu hơn

    if (!mounted) return;
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(builder: (_) => FadeWrapper(initialRoute: route)),
    );
  }

  @override
  Widget build(BuildContext context) {
    // Đây vẫn là màn hình trắng, giữ splash native
    return const Scaffold(
      backgroundColor: Colors.white,
      body: SizedBox.expand(), // giữ nguyên không hiển thị gì
    );
  }
}
