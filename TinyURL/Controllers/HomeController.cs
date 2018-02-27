using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TinyURL.Models;
using TinyURL.DAL;

namespace TinyURL.Controllers
{
    public class HomeController : Controller
    {
        // Context
        private UrlContext ctx = new UrlContext();
        
        public ActionResult Index()
        {
            return View();
        }
         
        [HttpPost]
        public ActionResult Create(Url urlObject)
        {
            if (ModelState.IsValid)
            {
                ctx.Url.Add(urlObject);
                ctx.SaveChanges();


                return Json(new { urlObject, JsonRequestBehavior.AllowGet });
            }
            string errorMessage = "Not Successful";
            return Json(new { Message = errorMessage, JsonRequestBehavior.DenyGet });

        } 



    }
}