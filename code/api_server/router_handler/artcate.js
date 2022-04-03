// 获取文章分类列表数据的处理函数
// 导入数据库操作模块
const db = require('../db/index.js')
exports.getArticleCates = function (req, res) {
    // 根据分类的状态，获取所有未被删除的分类列表数据
    // is_delete 为 0 表示没有被 标记为删除 的数据
    const sql = 'select * from ev_article_cate where is_delete=0 order by id asc';
    db.query(sql, function (err, results) {
        if (err) return res.cc(err)
        // 2. 执行 SQL 语句成功
        res.send({
            status: 0,
            message: '获取文章分类列表成功！',
            data: results
        })

    })
}
exports.addArticleCates = function (req, res) {
    // 定义查询 分类名称 与 分类别名 是否被占用的 SQL 语句
    const sql = `select * from ev_article_cate where name=? or alies=?`;
    db.query(sql, [req.body.name, req.body.alies], function (err, results) {
        if (err) return res.cc(err);
        // 判断 分类名称 和 分类别名 是否被占用
        if (results.length === 2) return res.cc('分类名称与别名被占用，请更换后重试！');
        // 分别判断 分类名称 和 分类别名 是否被占用
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！')
        if (results.length === 1 && results[0].alies === req.body.alies) return res.cc('分类别名被占用，请更换后重试！')
        // TODO：新增文章分类
        const sqlStr = `insert into ev_article_cate set ?`
        db.query(sqlStr, req.body, function (err, results) {
            if (err) res.cc(err);
            if (results.affectedRows !== 1) return res.cc('新增文章分类失败！');
            // 新增文章分类成功
            res.cc('新增文章分类成功！', 0)
        })
    });
};
exports.deleteCateById = function (req, res) {
    //定义删除文章分类的 SQL 语句：
    const sql = 'update ev_article_cate set is_delete=1 where id=?';
    db.query(sql, req.params.id, function (err, results) {
        if (err) return res.cc(err);
        if (results.affectedRows !== 1) return res.cc('删除文章分类失败！');
        res.cc('删除文章分类成功！', 0)
    })
};
exports.getArticleById = function (req, res) {
    //定义根据 Id 获取文章分类的 SQL 语句：
    const sql = `select * from ev_article_cate where id=?`
    db.query(sql, req.params.id, function (err, results) {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc('获取文章分类数据失败！');
        res.send({
            status: 0,
            message: '获取文章分类数据成功！',
            data: results[0]
        })
    })
};
exports.updateCateById = function (req, res) {
    // 定义查询 分类名称 与 分类别名 是否被占用的 SQL 语句
    const sql = `select * from ev_article_cate where Id<>? and (name=? or alies=?)`
    db.query(sql, [req.body.Id, req.body.name, req.body.alies], function (err, results) {
        if (err) return res.cc(err);
        // 判断 分类名称 和 分类别名 是否被占用
        if (results.length === 2) return res.cc('分类名称与别名被占用，请更换后重试！');
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！');
        if (results.length === 1 && results[0].alies === req.body.alies) return res.cc('分类别名被占用，请更换后重试！');
        // TODO：更新文章分类
        //  定义更新文章分类的 SQL 语句：
        const sqlStr = `update ev_article_cate set ? where Id=?`;
        db.query(sqlStr, [req.body, req.body.Id], function (err, results) {
            if (err) return res.cc(err);
            // SQL 语句执行成功，但是影响行数不等于 1
            if (results.affectedRows !== 1) return res.cc('更新文章分类失败！');
            // 更新文章分类成功
            res.cc('更新文章分类成功！',0)
        })
    })
}