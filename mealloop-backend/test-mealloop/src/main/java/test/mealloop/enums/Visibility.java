package test.mealloop.enums;

public enum Visibility {
    PRIVATE, // Chỉ mình bạn
    FOLLOWERS_ONLY, // Chỉ những người đã follow mới được xem
    FOLLOWING_ONLY, // Chỉ những người mà bạn đang follow được xem
    MUTUAL_ONLY, // Khi cả 2 theo dõi nhau mới được xem
    CUSTOM,
    PUBLIC,
}