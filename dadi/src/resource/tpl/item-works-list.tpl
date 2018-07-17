{{~it :m:n}}
//{{=m.vid_num || 0}}
<tr>
	<th scope="row">{{=m.id}}</th>
	<td><a href="works-details.html?id={{=m.id}}">{{!m.opus_name}}</a></td>
	<td>{{=formatopus(m.opus_type)}}</td>
	<td>{{=formattheme(m.theme_type)}}</td>
	<td>{{!m.droitList}}</td>
	<td id="{{=m.data_status}}">{{=formatState(m.data_status)}}</td>
	<td id="{{!m.id}}">
		<!--<button class="btn btn-primary" data-toggle="modal" data-target="#modal-changeRights">权利变更</button>
		<button class="btn btn-primary">修改</button>-->
		<button class="btn btn-default worksList-dele">删除</button>
	</td>
</tr>
{{~}}