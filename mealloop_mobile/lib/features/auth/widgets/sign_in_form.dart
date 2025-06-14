import 'package:flutter/material.dart';
// import 'package:http/http.dart' as http; // để gọi API
import 'dart:convert'; // để encode/decode JSON

class SignInForm extends StatefulWidget {
  final VoidCallback onSwitch;
  const SignInForm({required this.onSwitch, super.key});

  @override
  State<SignInForm> createState() => _SignInFormState();
}

class _SignInFormState extends State<SignInForm> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  bool _isLoading = false;
  String? _error;

  Future<void> _signIn() async {
    Navigator.pushReplacementNamed(context, '/main');
    // setState(() {
    //   _isLoading = true;
    //   _error = null;
    // });

    // final response = await http.post(
    //   Uri.parse('https://your-api-url.com/api/login'),
    //   headers: {'Content-Type': 'application/json'},
    //   body: jsonEncode({
    //     'email': _emailController.text,
    //     'password': _passwordController.text,
    //   }),
    // );

    // setState(() => _isLoading = false);

    // if (response.statusCode == 200) {
    //   // Giả sử response có token hoặc thông tin người dùng
    //   final data = jsonDecode(response.body);
    //   print("Đăng nhập thành công: $data");

    //   // TODO: Điều hướng sang màn hình chính
    //   Navigator.pushReplacementNamed(context, '/home');
    // } else {
    //   setState(() {
    //     _error = 'Đăng nhập thất bại. Vui lòng thử lại.';
    //   });
    // }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        const Text("Đăng nhập", style: TextStyle(fontSize: 24)),
        TextField(
          controller: _emailController,
          decoration: const InputDecoration(labelText: 'Email'),
        ),
        TextField(
          controller: _passwordController,
          decoration: const InputDecoration(labelText: 'Mật khẩu'),
          obscureText: true,
        ),
        const SizedBox(height: 16),
        if (_error != null) Text(_error!, style: const TextStyle(color: Colors.red)),
        ElevatedButton(
          onPressed: _isLoading ? null : _signIn,
          child: _isLoading ? CircularProgressIndicator() : const Text('Đăng nhập'),
        ),
        TextButton(
          onPressed: widget.onSwitch,
          child: const Text("Chưa có tài khoản? Đăng ký"),
        ),
      ],
    );
  }
}