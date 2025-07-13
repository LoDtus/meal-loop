package test.mealloop.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import test.mealloop.dto.auth.MyProfileResponse;
import test.mealloop.dto.filter.ProfileFilter;
import test.mealloop.dto.request.QueryRequest;
import test.mealloop.dto.response.ApiResponse;
import test.mealloop.entity.Auth;
import test.mealloop.entity.Profile;
import test.mealloop.service.AuthService;
import test.mealloop.service.JwtService;
import test.mealloop.service.ProfileService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/profile")
public class ProfileController {
    private final AuthService authService;
    private final ProfileService profileService;
    private final JwtService jwtService;

    @PostMapping("/get")
    public ResponseEntity<?> getProfile(
            HttpServletRequest httpServletRequest,
            QueryRequest<ProfileFilter> queryRequest
    ) {
        String accessToken = jwtService.extractTokenFromCookie(httpServletRequest, "accessToken");
        String currentUserId = jwtService.extractId(accessToken);

        // Kiểm tra tồn tại: -------------------------------------------------------------------------------------------
        Auth currentAuth = authService.findById(currentUserId);
        Profile currentProfile = profileService.findById(currentUserId);

        if (currentAuth == null || currentProfile == null) {
            ApiResponse<Void> error = ApiResponse.<Void>builder()
                    .statusCode(404)
                    .message("User not found")
                    .build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        }

        // Kiểm tra quyền xem toàn bộ thông tin của profile: -----------------------------------------------------------
        // Nếu query có truyền id, thì:
        // - Chỉ khi id đó trùng khớp với id của người dùng hiện tại thì mới có thể xem được toàn bộ thông tin của profile
        // - Người dùng có các quyền quản trị mới có thể xem được toàn bộ thông tin profile
        // ...
        // Nếu không thì sẽ không thể xem hết toàn bộ profile được, trừ khi profile đó cho phép hiển thị. Tránh việc ai
        // đó cố tình truyền id của người dùng khác vào khiến cho thông tin của người đó bị lộ toàn bộ
        String queryId = queryRequest.getFilter().getId();
        String role = jwtService.extractTokenFromCookie(httpServletRequest, "role");
        if (
                (queryId != null && queryId.equals(currentUserId))
                || role.equals("ROLE_ADMIN")
        ) {
            MyProfileResponse myProfileResponse = MyProfileResponse.builder()

                    .build();

            ApiResponse<MyProfileResponse> apiResponse = ApiResponse.<MyProfileResponse>builder()
                    .data(myProfileResponse)
                    .build();
            return ResponseEntity.ok(apiResponse);
        }

        // Lọc kết quả dựa theo request: -------------------------------------------------------------------------------
        Pageable pageable = PageRequest.of(
                queryRequest.getPagination().getPage(),
                queryRequest.getPagination().getSize(),
                Sort.by(
                        Sort.Direction.fromString(queryRequest.getPagination().getSortDirection()),
                        queryRequest.getPagination().getSortBy()
                )
        );

        // Nếu có các filter trả về nhiều kết quả thì ưu tiên sử dụng các filter đó và bỏ qua các filter chỉ trả về
        // 1 kết quả, chỉ khi nào không có filter nào trả về nhiều kết quả thì mới thực hiện trả về 1 kết quả

        // ...

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
//                .data()
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateProfile() {
        // ...

        ApiResponse<Void> apiResponse = ApiResponse.<Void>builder()
//                .data()
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteUser(

    ) {
        return ResponseEntity.ok("");
    }
}
