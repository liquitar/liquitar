/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.37
 * Generated at: 2015-11-18 07:38:07 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.page;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class login_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=utf-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write('\r');
      out.write('\n');

	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;

      out.write("\r\n");
      out.write("<!doctype html>\r\n");
      out.write("<html>\r\n");
      out.write("    <head>\r\n");
      out.write("        <meta charset=\"utf-8\">\r\n");
      out.write("        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n");
      out.write("        <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maxmium-scale=1,user-scalable=no\">\r\n");
      out.write("\t\t");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, (java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${basePath }/include/include.jsp", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false), out, false);
      out.write("\r\n");
      out.write("        <!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"css/bootstrap.min.css\">\r\n");
      out.write("        <script type=\"text/javascript\" src=\"js/jquery-2.1.4.min.js\"></script>\r\n");
      out.write("        <script type=\"text/javascript\" src=\"js/bootstrap.min.js\"></script> -->\r\n");
      out.write("        <title>登录</title>\r\n");
      out.write("        <script type=\"text/javascript\">\r\n");
      out.write("        </script>\r\n");
      out.write("        <style type=\"text/css\">\r\n");
      out.write("            body{\r\n");
      out.write("                background-color: #63B8FF;\r\n");
      out.write("            }\r\n");
      out.write("            .container{\r\n");
      out.write("                text-align: center;\r\n");
      out.write("            }\r\n");
      out.write("            .lgn{\r\n");
      out.write("                background-color: #FFFFFF;\r\n");
      out.write("                padding: 24px;\r\n");
      out.write("                border: solid 1px #666;\r\n");
      out.write("                border-radius: 4px;\r\n");
      out.write("                width: 640px;\r\n");
      out.write("                height: 360px;\r\n");
      out.write("                margin: 120px auto;\r\n");
      out.write("            }\r\n");
      out.write("        </style>\r\n");
      out.write("    </head>\r\n");
      out.write("    <body>\r\n");
      out.write("        <div class=\"container\">\r\n");
      out.write("            <h2>用户登录</h2>\r\n");
      out.write("            <div class=\"lgn\">\r\n");
      out.write("                <form class=\"form-horizontal\">\r\n");
      out.write("                    <div class=\"form-group\">\r\n");
      out.write("                        <label for=\"userName\" class=\"col-sm-4 control-label\">用户名</label>\r\n");
      out.write("                        <div class=\"col-sm-6\">\r\n");
      out.write("                          <input type=\"text\" class=\"form-control\" id=\"userName\" placeholder=\"用户名\">\r\n");
      out.write("                        </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <div class=\"form-group\">\r\n");
      out.write("                        <label for=\"userPwd\" class=\"col-sm-4 control-label\">用户密码</label>\r\n");
      out.write("                        <div class=\"col-sm-6\">\r\n");
      out.write("                          <input type=\"password\" class=\"form-control\" id=\"userPwd\" placeholder=\"用户密码\">\r\n");
      out.write("                        </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    <!--\r\n");
      out.write("                    <div class=\"form-group\">\r\n");
      out.write("                        <div class=\"col-sm-offset-2 col-sm-10\">\r\n");
      out.write("                          <div class=\"checkbox\">\r\n");
      out.write("                            <label>\r\n");
      out.write("                              <input type=\"checkbox\"> Remember me\r\n");
      out.write("                            </label>\r\n");
      out.write("                          </div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                    -->\r\n");
      out.write("                    <div class=\"form-group\">\r\n");
      out.write("                        <div class=\"col-sm-offset-4 col-sm-6\">\r\n");
      out.write("                          <button type=\"submit\" class=\"btn btn-default\">登录</button>\r\n");
      out.write("                        </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </form>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </body>\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
