{{~it :m:n}}
//{{=m.vid_num || 0}}
<tr id="{{!m.id}}">
	<th class="th" scope="row"><input type="checkbox" name="obligee-checkbox"  value="{{!m.id}}">{{!m.name}}</th>
	<td>{{!m.type}}</td>
	<td>{{!m.remuneration}}</td>
	<td>{{!m.currency}}</td>
	<td>{{!m.money}}</td>
	<td><button type="button" class="btn btn-default btn-obligee-list-edit" data-toggle="modal" data-target="#modal-qbligeeAdd"><i class="glyphicon glyphicon-pencil"></i>修改</button></td>
</tr>
{{~}}