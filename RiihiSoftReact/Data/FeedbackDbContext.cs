using Microsoft.EntityFrameworkCore;
using RiihiSoftReact.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RiihiSoftReact.Data
{
    public class FeedbackDbContext : DbContext
    {
        public FeedbackDbContext(DbContextOptions options)
            :base(options)
        {

        }
        public DbSet<Feedback> Feedbacks { get; set; }
    }
}
