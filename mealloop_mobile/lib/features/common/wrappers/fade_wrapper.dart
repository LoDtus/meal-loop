import 'package:flutter/material.dart';
import 'package:mealloop_mobile/features/auth/screens/auth_screen.dart' show AuthScreen;
import 'package:mealloop_mobile/features/introduction/onboarding_screen.dart';
import 'package:mealloop_mobile/features/post/screens/post_screen.dart';

class FadeWrapper extends StatefulWidget {
  final String initialRoute;
  const FadeWrapper({super.key, required this.initialRoute});

  @override
  State<FadeWrapper> createState() => _FadeWrapperState();
}

class _FadeWrapperState extends State<FadeWrapper>
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 800),
  );

  late final Animation<double> _animation = CurvedAnimation(
    parent: _controller,
    curve: Curves.easeOut,
  );

  late final Widget _screen;

  @override
  void initState() {
    super.initState();
    _controller.forward();

    // Xác định màn hình tiếp theo theo route
    switch (widget.initialRoute) {
      case '/auth':
        _screen = const AuthScreen();
        break;
      // case '/introduction':
      //   _screen = const IntroductionScreen();
      //   break;
      case '/post':
        _screen = const PostScreen();
        break;
      default:
        _screen = const AuthScreen(); // fallback
    }
  }

  @override
  Widget build(BuildContext context) {
    return FadeTransition(
      opacity: _animation,
      child: _screen,
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}