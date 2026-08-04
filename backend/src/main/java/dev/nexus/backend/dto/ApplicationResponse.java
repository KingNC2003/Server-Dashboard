package dev.nexus.backend.dto;

public record ApplicationResponse(
    Long id,
    String name,
    String description,
    String url,
    String iconKey,
    String repoLink,
    String categoryName
) {
}