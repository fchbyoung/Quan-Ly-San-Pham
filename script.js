let data = '';
let products = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4',
    'Apple iPhone 6S', 'Xiaomi Mi 5s Plus', 'Apple iPhone 8 Plus', 'Fujitsu F-04E', 'Oppo A71'];
function run() {
    amount = " "+ products.length + " Products";
    document.getElementById("amount").innerHTML = amount;
    for(let i = 0;i<products.length;i++)
    {
        data+='<tr id=i>';
        data+='<td width="500px">'+products[i]+"</td>";
        data+="<td width='150px'>"+"<input id='btnedit' type='button' value='Edit' onclick='editProduct("+i+")'></td>";
        data+="<td>"+"<input id='btndelete' type='button' value='Delete' onclick='deleteProduct("+i+")'></td>";
        data+='</tr>';
    }
    document.getElementById("products").innerHTML=data;
}
function addProduct() {
    let newProduct = document.getElementById("newproduct");
    products.push(newProduct.value);
    data='';
    run();
}
function editProduct(position) {
    let editform = '';
    let oldValue = products[position];
    editform += "<h3><b>Edit Product</b></h3>";
    editform += "<input id='productname' type='text' value='"+oldValue+"' style='background-color: white;color: black'>";
    editform += "<input id='btnedt' type='button' value='Edit' onclick='editForm("+position+")'>" +"<br>";
    editform += "<input id='btnclose' type='button' value='Close' onclick='closeEditForm()'>";
    document.getElementById("edit").innerHTML=editform;
}
function editForm(position) {
    let newValue = document.getElementById("productname").value;
    products[position]=newValue;
    data='';
    run();
    closeEditForm();
}
function deleteProduct(position) {
    products.splice(position,1);
    data='';
    run();
}
function closeEditForm() {
    let closeEditForm ="";
    document.getElementById("edit").innerHTML=closeEditForm;
    data='';
    run();
}