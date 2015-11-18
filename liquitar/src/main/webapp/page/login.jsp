<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1,maxmium-scale=1,user-scalable=no">
		<jsp:include page="${basePath }/include/include.jsp"></jsp:include>
        <!-- <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script> -->
        <title>登录</title>
        <script type="text/javascript">
        </script>
        <style type="text/css">
            body{
                background-color: #63B8FF;
            }
            .container{
                text-align: center;
            }
            .lgn{
                background-color: #FFFFFF;
                padding: 24px;
                border: solid 1px #666;
                border-radius: 4px;
                width: 640px;
                height: 360px;
                margin: 120px auto;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>用户登录</h2>
            <div class="lgn">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="userName" class="col-sm-4 control-label">用户名</label>
                        <div class="col-sm-6">
                          <input type="text" class="form-control" id="userName" placeholder="用户名">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="userPwd" class="col-sm-4 control-label">用户密码</label>
                        <div class="col-sm-6">
                          <input type="password" class="form-control" id="userPwd" placeholder="用户密码">
                        </div>
                    </div>
                    <!--
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <div class="checkbox">
                            <label>
                              <input type="checkbox"> Remember me
                            </label>
                          </div>
                        </div>
                    </div>
                    -->
                    <div class="form-group">
                        <div class="col-sm-offset-4 col-sm-6" style="text-align: left;">
                          <button type="submit" class="btn btn-default">登录</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </body>
</html>