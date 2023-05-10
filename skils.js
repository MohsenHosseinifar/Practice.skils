var data_base = [{ id: 1, atwork: " js", lerning: false },
{ id: 2, atwork: " fotball", lerning: false },
{ id: 3, atwork: " swim", lerning: false },
{ id: 4, atwork: " chess", lerning: false }
]
var number_todolist = Number(prompt("tipe your number: \n 1:add \n2:remove \n 3:update"))
if (number_todolist === 1) {

    var work_new = prompt("مهارت جدیدی را وارد کنید  ")
    var work_new_data_base = {
        id: data_base.length + 1,
        atwork: work_new,
        lerning: false
    }
    data_base.push(work_new_data_base)
    console.log(data_base)
} else if (number_todolist === 2) {
    var work_remove = prompt("نام  مهارتی که  می خواهید حذف کنید را بنویسید ")
    var work_index = data_base.findIndex(function (index) {
        return index.atwork == work_remove
    })
    data_base.splice(work_index, 1)
    console.log(data_base)
} else if (number_todolist === 3) {
    var work_update = prompt(" کدام مهارت  رو یاد گرفتی ")
    data_base.forEach(function (update) {
        if (work_update === update.atwork) {
            update.lerning = true
        }
    })
    console.log(data_base)
} else {
    alert("namber is not carect")
}
