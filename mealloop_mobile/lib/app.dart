import 'package:flutter/material.dart';
import 'package:mealloop_mobile/features/auth/screens/auth_screen.dart';
import 'package:mealloop_mobile/features/common/screens/main_screen.dart';
import 'package:mealloop_mobile/features/introduction/onboarding_screen.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      theme: ThemeData(
        primaryColor: Colors.blue, // màu chủ đạo
        scaffoldBackgroundColor: Colors.white, // màu nền mặc định
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.white,
          foregroundColor: Colors.black,
          elevation: 0,
        ),
        iconTheme: const IconThemeData(color: Colors.grey),
        textTheme: const TextTheme(
          bodyMedium: TextStyle(color: Colors.black),
        ),
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.blue,
          brightness: Brightness.light,
        ),
      ),
      routes: {
        '/': (context) => const OnboardingScreen(),
        '/auth': (context) => const AuthScreen(),
        '/main': (context) => const MainScreen(),
      },
    );
  }
}