{{~it :m:n}}
//{{=m.vid_num || 0}}
<tr id="{{!m.id}}">
	<th scope="row">{{!m.contract_code}}</th>
	<td  ><a class="btn-ht-news"  data-toggle="modal" data-target="#modal-detailsContract-produc">{{!m.contract_name}}</a></td>
	<td>{{!m.sign_date}}</td>
	<td>{{!m.effect_date}}</td>
	<td>{{!m.invalid_date}}</td>	
</tr>
{{~}}