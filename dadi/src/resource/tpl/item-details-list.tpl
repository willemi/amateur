{{~it :m:n}}
<tr>
	<td>{{=m.obligee_name}}</td>
	<td>{{=m.obligee_type}}</td>
	<td>{{=formatobligee_type(m.is_pay)}}</td>
	<td>{{=formatobligee_you(m.is_pay)}}</td>
	<td>{{=m.pay_amount}}</td>
</tr>
{{~}}