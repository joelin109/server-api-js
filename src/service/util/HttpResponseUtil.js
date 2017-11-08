exports.commonJson = function (res, data, except_case, except_case_desc) {
    var response = {
        "code": "1",
        "code_desc": "success",
        "except_case": except_case || "",
        "except_case_desc": except_case_desc || "",
        "result": data || ""
    };

    res.json(response);
};

