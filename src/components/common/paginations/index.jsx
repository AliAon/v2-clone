"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Paginations({ totalItems, itemsPerPage = 10, setCurrentPage , currentPage,totalPages}) {
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(1);

    let rangeStart = Math.max(2, currentPage - 1);
    let rangeEnd = Math.min(totalPages - 1, currentPage + 1);

    if (rangeEnd - rangeStart < 2) {
      if (rangeStart === 2) {
        rangeEnd = Math.min(totalPages - 1, rangeEnd + 1);
      } else if (rangeEnd === totalPages - 1) {
        rangeStart = Math.max(2, rangeStart - 1);
      }
    }

    if (rangeStart > 2) {
      pageNumbers.push("ellipsis1");
    }

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pageNumbers.push(i);
    }

    if (rangeEnd < totalPages - 1) {
      pageNumbers.push("ellipsis2");
    }

    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="mt-10 quick_sand z-10 relative">
      <Pagination>
        <PaginationContent className="flex items-center gap-2">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goToPage(currentPage - 1);
              }}
              className="bg-[#40CEEC] text-white rounded-full w-10 h-10 flex items-center justify-center border-none hover:bg-sky-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </PaginationPrevious>
          </PaginationItem>

          {getPageNumbers().map((page, index) => {
            if (page === "ellipsis1" || page === "ellipsis2") {
              return (
                <PaginationItem key={page}>
                  <span className="px-2 text-gray-400">...</span>
                </PaginationItem>
              );
            }

            return (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage(page);
                  }}
                  className={`rounded-full w-10 h-10 flex items-center justify-center ${
                    currentPage === page
                      ? "bg-[#40CEEC] text-white"
                      : "bg-white border border-gray-200 hover:bg-sky-100"
                  }`}
                >
                  {page.toString().padStart(2, "0")}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goToPage(currentPage + 1);
              }}
              className="bg-[#40CEEC] text-white rounded-full w-10 h-10 flex items-center justify-center border-none hover:bg-sky-400"
            >
              <ChevronRight className="h-5 w-5" />
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
