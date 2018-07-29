{{~it :m:n}}
//{{=m.vid_num || 0}}
<tr>
	<th scope="row">{{!m.id}}</th>
	<!--<td><a class="btn-details" data-id="{{!m.id}}">{{!m.opus_name}}</a></td>-->
	<td>{{!m.mark_progress}}</td>
	<td>{{!m.mark_name}}</td>
	<td>{{!m.mark_agent_institution}}</td>
	<td>{{!m.fushen_agent_institution}}</td>
	<td>{{!m.fushen_is_fushen}}</td>
	<td>{{!m.mark_register_leibie}}</td>
	<td id="{{!m.id}}">		
		<!--<button class="btn btn-primary">修改</button>-->
		<button class="btn btn-default worksList-dele">删除</button>
	</td>
</tr>
{{~}}