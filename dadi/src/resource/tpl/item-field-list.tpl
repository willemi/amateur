{{~it :m:n}}
<tr id="{{!m.id}}">
	<th scope="row">{{!m.file_name}}</th>
	<td>{{!m.file_type}}</td>
	<td>{{!m.file_size}}</td>
	<td>{{!m.owner_email}}</td>
	<td>{{!m.registrar}}</td>
	<td>{{!m.regist_date}}</td>
	<td id="{{!m.id}}">		
		<!--<button class="btn btn-primary">修改</button>-->
		<button class="btn btn-default btn-upload-dele">删除</button>
	</td>
</tr>
{{~}}