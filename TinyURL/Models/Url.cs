using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TinyURL.Models
{
    public class Url
    {
        public int Id { get; set; }
        public string shortid { get; set; }
        public string href { get; set; }
    }
}