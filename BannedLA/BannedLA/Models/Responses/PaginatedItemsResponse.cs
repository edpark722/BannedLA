using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sabio.Web.Models.Responses
{
    /// <summary>
    /// This is an example of a Generic class that you will gain an understanding of
    /// as you progress through the training.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class PaginatedItemsResponse<T> : ItemsResponse<T>
    {
        public int CurrentPage { get; set; }

        public int ItemsPerPage { get; set; }

        public int TotalItems { get; set; }

        public string Query { get; set; }

    }
}