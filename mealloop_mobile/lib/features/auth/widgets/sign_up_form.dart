import 'package:flutter/material.dart'
    show
        StatelessWidget,
        VoidCallback,
        BuildContext,
        Column,
        Widget,
        MainAxisSize,
        TextButton,
        Text;

class SignUpForm extends StatelessWidget {
  final VoidCallback onSwitch;
  const SignUpForm({required this.onSwitch, super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        const Text("Đăng ký"),
        // ... các TextField, nút đăng ký
        TextButton(
          onPressed: onSwitch,
          child: const Text("Đã có tài khoản? Đăng nhập"),
        ),
      ],
    );
  }
}
