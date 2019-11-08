# Xin chào

> Đây là project mình làm theo trên trang [coders.tokyo](https://coders-x.com/) (nay đổi thành coders X)
> Mọi người cò thể liên hệ mình qua địa chỉ mail: hovanvydut@gmail.com
> Hoặc trang [Facebook](fb.com/hovanvydut) cá nhân

## Hướng dẫn đăng nhập trang /auth/login

- Truy cập route: auth/login
- Tài khoản: hovanvydut@gmail.com
- Mật khẩu: 123456

### Notes một số lỗi cần sửa bằng markdown :v

| STT | Lỗi                                                                          |
| --- | ---------------------------------------------------------------------------- |
| 1   | không hiển thị được cartCount ra view ở route /products                      |
| 2   | không hiển thị được transferMessage ở route view /transfer (file common.pug) |
| 3   | không hiển thị được notification ở user.validate (file common.pug)           |
| 4   | sessionMiddleware(phân biệt người dùng đã đăng nhập và chưa đăng nhập)       |
| 5   | làm chức năng phân trang products                                            |

## Hướng dẫn sử dụng demo CSRF(Cross-site request Forgery)

- Folder CSRF chứa file index.html(nơi setup sẵn form giả mạo)
- Sử dụng comman line cd --> CSRF
- type: static-server
- truy cập port 9080: localhost:9080
- end
