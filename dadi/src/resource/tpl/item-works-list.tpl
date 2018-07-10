{{~it :m:n}}
//{{=m.vid_num || 0}}
<tr>
	<th scope="row">{{=m.id}}</th>
	<td><a href="ipdetails.html">{{!m.name}}</a></td>
	<td>{{!m.type}}</td>
	<td>{{!m.fu}}</td>
	<td>{{!m.mony}}</td>
	<td id="{{=m.zt}}">{{=formatState(m.zt)}}</td>
	<td id="{{!m.id}}">
		<button class="btn btn-primary" data-toggle="modal" data-target="#modal-changeRights">权利变更</button>
		<button class="btn btn-primary">修改</button>
		<button class="btn btn-default" class="worksList-dele">删除</button>
	</td>
</tr>
{{~}}