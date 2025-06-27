import { parseISO, format } from 'date-fns';
import DOMPurify from 'dompurify';
import type { MenuProps } from 'antd';
import ProfileMenu from "../../fragments/profile/components/ProfileMenu";

/*          ---------- CÁC HÀM HỖ TRỢ VỀ THỜI GIAN ----------           */
// Lấy ra thời điểm hiện tại dưới dạng ISO 8601
export const getNow = () => {
    return "";
};

// Chuyển các dạng thời gian khác nhau sang dạng ISO 8601
export const convertTimeToISO = () => {
    return "";
};

// Chuyển từ ISO 8601 sang dạng ddMMyyyy
export const convertISOTo_ddMMyyy = (dateISO: string, separator: string = "/") => {
    if (!dateISO) return "";

    const date = parseISO(dateISO);
    const formatPattern = `dd${separator}MM${separator}yyyy`;
    return format(date, formatPattern);
};

/*          ---------- CÁC HÀM GIÚP XÁC THỰC ĐỊNH DẠNG DỮ LIỆU ----------           */
// Kiểm tra định dạng Email có hợp lệ không
export const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;
    return emailRegex.test(email);
};

// Kiểm tra định dạng số điện thoại có hợp lệ không
export const isValidPhone = (phone: string) => {
    const phoneRegex = /^\+?[0-9]{1,4}?[ -]?(\(?[0-9]{2,4}\)?[ -]?)?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    return phoneRegex.test(phone);
};

// Hàm kiểm tra xem người dùng có nhập các ký tự hợp lệ không, tránh phá hoại, lỗi hệ thống
export const sanitizeComment = (input: string) => { // ví dụ: hàm sanitize các thành phần html trong comment
    // sanitize nên được dùng đối với các thành phần sẽ được dùng để hiển thị lại
    return DOMPurify.sanitize(input);
};