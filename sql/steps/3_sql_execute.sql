-- ==============================
-- 用户接口
-- ==============================

-- 用户注册
INSERT INTO t_user(`username`, `password`) VALUES("user1", "111111");
-- 用户登录
SELECT * FROM t_user WHERE username = 'user1';


-- ==============================
-- 文件上传接口
-- ==============================

INSERT INTO t_avatar(filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);
SELECT * FROM t_avatar WHERE user_id = 2;
UPDATE t_user SET avatar_url = ? WHERE id = ?;