{{~it :m:n}}
//{{=m.vid_num || 0}}
<tr>
	<th scope="row">{{!m.id}}</th>
	<!--<td><a class="btn-details" data-id="{{!m.id}}">{{!m.opus_name}}</a></td>-->
	<td>{{!m.realmname_address}}</td>
	<td>{{!m.owner}}</td>
	<td>{{!m.owner_email}}</td>
	<td>{{!m.registrar}}</td>
	<td>{{!m.regist_date}}</td>
	<td>{{!m.end_date}}</td>
	<td id="{{!m.id}}">		
		<!--<button class="btn btn-primary">修改</button>-->
		<button class="btn btn-default worksList-dele">删除</button>
	</td>
</tr>
{{~}}