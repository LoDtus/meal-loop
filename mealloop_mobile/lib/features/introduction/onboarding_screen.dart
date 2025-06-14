import 'package:flutter/material.dart';
// import 'package:smooth_page_indicator/smooth_page_indicator.dart';

class OnboardingPage {
  final String imageAsset;
  final String title;
  final String description;

  OnboardingPage({
    required this.imageAsset,
    required this.title,
    required this.description,
  });
}

final List<OnboardingPage> onboardingPages = [
  OnboardingPage(
    imageAsset: 'assets/branding/logo.png',
    title: 'Chào mừng!',
    description: 'Ứng dụng giúp bạn quản lý công việc dễ dàng hơn.',
  ),
  OnboardingPage(
    imageAsset: 'assets/branding/logo.png',
    title: 'Theo dõi tiến độ',
    description: 'Xem tiến độ dự án của bạn theo thời gian thực.',
  ),
  OnboardingPage(
    imageAsset: 'assets/branding/logo.png',
    title: 'Bắt đầu thôi!',
    description: 'Hãy cùng bắt đầu sử dụng ứng dụng ngay bây giờ.',
  ),
];

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  final PageController _pageController = PageController();
  int _currentPage = 0;

  // Hàm: ------------------------------------------------------------------------------------------
  void _onNext() {
    if (_currentPage < onboardingPages.length - 1) {
      _pageController.nextPage(duration: Duration(milliseconds: 300), curve: Curves.easeIn);
    } else {
      _finishOnboarding();
    }
  }

  void _finishOnboarding() {
    // TODO: chuyển sang màn hình đăng nhập hoặc home
    Navigator.pushReplacementNamed(context, '/auth');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: PageView.builder(
                controller: _pageController,
                itemCount: onboardingPages.length,
                onPageChanged: (index) => setState(() => _currentPage = index),
                itemBuilder: (_, index) {
                  final page = onboardingPages[index];
                  return Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Image.asset(page.imageAsset, height: 300),
                      const SizedBox(height: 30),
                      Text(page.title, style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
                      const SizedBox(height: 10),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 40),
                        child: Text(
                          page.description,
                          textAlign: TextAlign.center,
                          style: TextStyle(fontSize: 16),
                        ),
                      ),
                    ],
                  );
                },
              ),
            ),
            _buildDotsIndicator(),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: _onNext,
              child: Text(_currentPage == onboardingPages.length - 1 ? 'Bắt đầu' : 'Tiếp'),
            ),
            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }

  Widget _buildDotsIndicator() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: List.generate(
        onboardingPages.length,
        (index) => Container(
          margin: const EdgeInsets.symmetric(horizontal: 4),
          width: _currentPage == index ? 12 : 8,
          height: _currentPage == index ? 12 : 8,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: _currentPage == index ? Colors.blue : Colors.grey,
          ),
        ),
      ),
    );
  }
}
