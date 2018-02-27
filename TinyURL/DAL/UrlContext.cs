using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TinyURL.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace TinyURL.DAL
{
    public class UrlContext : DbContext
    {
        public UrlContext() : base("UrlContext")
        {

        }

        public DbSet<Url> Url { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}