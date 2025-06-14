import 'package:flutter/material.dart'
    show
        StatelessWidget,
        BuildContext,
        Widget,
        Scaffold,
        Center,
        ElevatedButton,
        Text,
        Navigator,
        State,
        StatefulWidget,
        Stack,
        Positioned,
        Image,
        BoxFit,
        AnimatedSwitcher;
import 'package:mealloop_mobile/features/auth/widgets/sign_in_form.dart';
import 'package:mealloop_mobile/features/auth/widgets/sign_up_form.dart';

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  bool _isSignIn = true;

  void _toggleForm() {
    setState(() {
      _isSignIn = !_isSignIn;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned.fill(
            child: Image.asset(
              'assets/images/test-background.jpg',
              fit: BoxFit.cover,
            ),
          ),
          Center(
            child: AnimatedSwitcher(
              duration: const Duration(milliseconds: 300),
              child: _isSignIn
                  ? SignInForm(onSwitch: _toggleForm)
                  : SignUpForm(onSwitch: _toggleForm),
            ),
          ),
        ],
      ),
    );
  }
}
