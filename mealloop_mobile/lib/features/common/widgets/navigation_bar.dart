import 'package:flutter/material.dart';

class CustomNavigationBar extends StatelessWidget {
  final int selectedIndex;
  final ValueChanged<int> onTabSelected;

  const CustomNavigationBar({
    super.key,
    required this.selectedIndex,
    required this.onTabSelected,
  });

  double _getIndicatorLeft(double tabWidth, double indicatorWidth) {
    final offset = (tabWidth - indicatorWidth) / 2;
    return selectedIndex * tabWidth + offset;
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final tabWidth = screenWidth / 5;
    final double indicatorWidth = tabWidth - 25;

    final List<Map<String, dynamic>> tabs = [
      {'icon': Icons.home, 'label': 'Bài viết', 'iconSize': 28.0},
      {'icon': Icons.search, 'label': 'Tìm kiếm', 'iconSize': 26.0},
      {'icon': Icons.store, 'label': 'Cửa hàng', 'iconSize': 30.0},
      {'icon': Icons.chat, 'label': 'Tin nhắn', 'iconSize': 27.0},
      {'icon': Icons.person, 'label': 'Hồ sơ', 'iconSize': 25.0},
    ];

    return Container(
      height: 70,
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(
          top: BorderSide(
            color: Color(0xFFd1d3d7),
            width: 1,
          ),
        ),
      ),
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          // Indicator: ----------------------------------------------------------------------------
          AnimatedPositioned(
            duration: const Duration(milliseconds: 250),
            curve: Curves.easeInOut,
            top: -2,
            left: _getIndicatorLeft(tabWidth, indicatorWidth),
            child: Container(
              width: indicatorWidth,
              height: 4,
              decoration: BoxDecoration(
                color: Colors.blue,
                borderRadius: BorderRadius.circular(2),
              ),
            ),
          ),

          Row(
            children: tabs.asMap().entries.map((entry) {
              final index = entry.key;
              final tab = entry.value;

              final bool isSelected = selectedIndex == index;
              final Color color = isSelected ? Colors.blue : Colors.grey;

              return Expanded(
                child: GestureDetector(
                  behavior: HitTestBehavior.opaque,
                  onTap: () {
                    if (!isSelected) onTabSelected(index);
                  },
                  child: SizedBox(
                    height: 70,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          tab['icon'],
                          size: tab['iconSize'],
                          color: color,
                        ),
                        const SizedBox(height: 4),
                        Text(
                          tab['label'],
                          style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.w900,
                            color: color,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              );
            }).toList(),
          ),
        ],
      ),
    );
  }
}
