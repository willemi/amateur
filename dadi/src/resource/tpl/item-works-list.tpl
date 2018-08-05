{{~it :m:n}}
//{{=m.vid_num || 0}}
<tr>
	<th scope="row">{{=m.id}}</th>
	<td><a class="btn-details" data-id="{{=m.id}}">{{!m.opus_name}}</a></td>
	<td>{{=m.opus_type}}</td>
	<td>{{=m.theme_type}}</td>
	<td>{{!m.contract_name}}</td>
	<td id="{{=m.data_status}}">{{=formatState(m.data_status)}}</td>
	<td id="{{!m.id}}">
		<button class="btn btn-primary works-list-bg" dada-old={{!m.old_shouquanren-m.old_beishouquanren}} data-toggle="modal" data-target="#modal-changeRights">权利变更</button>
		<button class="btn btn-primary works-list-edit">修改</button>
		<button class="btn btn-default worksList-dele">删除</button>
	</td>
</tr>
{{~}}