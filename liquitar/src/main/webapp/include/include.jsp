<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/bootstrap.min.css">
<script type="text/javascript" src="<%=basePath%>/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/bootstrap.min.js"></script>