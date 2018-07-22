{{~it :m:n}}
//{{=m.vid_num || 0}}
<tr>
	<th scope="row">{{!m.id}}</th>
	<td><a class="btn-details" data-id="{{!m.id}}">{{!m.product_code}}</a></td>
	<td>{{!m.product_name}}</td>
	<td>{{!m.theme_type}}</td>
	<td>{{!m.product_xingtai}}</td>
	<td>{{!m.shou_quan_ren}}</td>
	<td>{{!m.bei_shou_quan_ren}}</td>
	<td>{{!m.ishave_contract}}</td>
	<td>{{!m.droit_startime}}</td>
	<td>{{!m.droit_endtime}}</td>
	<td>{{!m.droit_mode}}</td>
	<td>{{!m.sqxk_sydy}}</td>
	<td>{{!m.sqxk_syyy}}</td>
	<td>{{!formatobligee_type(m.is_deleg)}}</td>
	<td>{{!formatobligee_type(m.is_wripr)}}</td>
	<td>{{!m.sqxk_syqd}}</td>
	<td>{{!m.sqxk_sycs}}</td>
	<td id="{{=m.check_status}}">{{=formatState(m.check_status)}}</td>
	<td id="{{!m.id}}">
		<!--<button class="btn btn-primary">修改</button>-->
		<button class="btn btn-default worksList-dele">删除</button>
	</td>
</tr>
{{~}}